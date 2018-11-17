import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  //array = [ 1, 2, 3, 4 ];
  array = [{
    id: 1,
    href: 'https://r.sinaimg.cn/large/article/49f4966413c770fa986e1b367aecdf87'
  },{
    id: 2,
    href: 'https://r.sinaimg.cn/large/article/fc1b0c13580b3e5228377a9032edf341'
  },{
    id: 3,
    href: 'http://5b0988e595225.cdn.sohucs.com/images/20171120/9ac4cf1e26f64494a0e4bbd55275f60a.jpeg'
  },{
    id: 4,
    href: 'http://5b0988e595225.cdn.sohucs.com/images/20171120/eaab19eb563d424b8d5a762593968b6c.jpeg'
  }];
  effect = 'scrollx';

  ngOnInit() {
  }
}
