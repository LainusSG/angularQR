import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { FixMeLater } from 'angularx-qrcode';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent implements OnInit {
texto: any;

public cameras:MediaDeviceInfo[]=[];
public myDevice!: MediaDeviceInfo;
public scannerEnabled=false;
public results:string[]=[];


datarray : any[]=[];
dataobj1 : any = {};
dataobj2 : any = {};
dataobj3 : any = {};
dataobj4 : any = {};
dataobj5 : any = {};



 
  constructor(public apiService: ApiService ){}

    ngOnInit(): void {
    
      this.llenarData1();
      this.llenarData2();
      this.llenarData3();
      this.llenarData4();
      this.llenarData5();
    }
  
  

    llenarData1(){
      this.apiService.getData1().subscribe(dataobj1 =>{
        this.dataobj1 = dataobj1;
        console.log(this.dataobj1);
      })
    }
   
    llenarData2(){
      this.apiService.getData2().subscribe(dataobj2 =>{
        this.dataobj2 = dataobj2;
        console.log(this.dataobj2);
      })
    }

    llenarData3(){
      this.apiService.getData3().subscribe(dataobj3 =>{
        this.dataobj3 = dataobj3;
        console.log(this.dataobj3);
      })
    }


    llenarData4(){
      this.apiService.getData4().subscribe(dataobj4 =>{
        this.dataobj4 = dataobj4;
        console.log(this.dataobj4);
      })
    }


    llenarData5(){
      this.apiService.getData5().subscribe(dataobj5 =>{
        this.dataobj5 = dataobj5;
        console.log(this.dataobj5);
      })
    }
    
 
    



    camerasFoundHandler(cameras: MediaDeviceInfo[]){
      this.cameras=cameras;
      this.selectCamera(this.cameras[0].label);
    }
  
    scanSuccessHandler(event:string){
      console.log(event);
      this.results.unshift(event);
    }
  
    selectCamera(cameraLabel: string){    
      this.cameras.forEach(camera=>{
        if(camera.label.includes(cameraLabel)){
          this.myDevice=camera;
          console.log(camera.label);
          this.scannerEnabled=true;
        }
      })    
    }
   

  }

  
 

