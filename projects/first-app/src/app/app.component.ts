import { Component, OnInit,ViewChild } from '@angular/core';
// import MediaStreamRecorder from 'msr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'firstApp';
  radioUrl = ['http://audiostream.rtl.be/contactfr192',
  'https://radios.rtbf.be/classic21-128.mp3',
  'http://streamingp.shoutcast.com/NRJPremium'
  ];
  radioLaunched = [false, false, false];
  currentSource = this.radioUrl[0];
  // private audioRecorder: MediaStreamRecorder;
  private mediaConstraints = {
    audio: true,
    video: false
  };
  @ViewChild('player')
  player:any;
  constructor() { }

  ngOnInit() {
    // navigator.getUserMedia(this.mediaConstraints,
    //   (stream) => {
    //     this.audioRecorder = new MediaStreamRecorder(stream);
    //     this.audioRecorder.stream = stream;
    //     this.audioRecorder.mimeType = 'audio/mpeg';
    //     this.player.nativeElement.src = this.currentSource;
    // },
    //   (error) => {
    //     console.log(error);
    // });
  }
  launchRadio(num: number) {
    this.currentSource = this.radioUrl[num];
    this.player.nativeElement.src = this.currentSource;
    console.log(typeof(this.player));
    for (let i = 0; i < this.radioLaunched.length; i++) {
      this.radioLaunched[i] = false;
  }
    this.radioLaunched[num] = true;
    console.log(this.radioLaunched[num]);
  }

}





