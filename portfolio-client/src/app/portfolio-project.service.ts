import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

enum Status {
  active = "Active",
  on_hold = "On hold",
  inactive = "Inactive",
  archived = "Finished"
}

export interface Project {
  name: string;
  status: Status;
  id: string;
  short_description: string;
  long_description?: string;
  imageUrl?: string;
  startDate?: Date;
  endDate?: Date | undefined;
}





@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {
  projects: Project[] = [
    {
      name: 'DIY Keyboard',
      status: Status.on_hold,
      id: uuidv4(), 
      short_description: 'An ergonomic 3D printed custom mechanical keyboard based on the popular dactyl manyform design.',
      long_description: 'An Ergodox-style keyboard based on the Dactyl ManuForm by Tom Short based on the Dactyl by Matt Adereth. My version is the handwired 56-key version using clicky CherryMX blue switches. The keyboard consist of a left and a rigth side both of which took about a day to print. The bottom of the keyboard is made of 1.5mm steel plate meticuouslu shaped to fit the outer diamater of the left and right keyboards. This brings added heft to the keyboard making it feel super stable and premium despite the otherwise plastic construction. Internally each swich had a diode(insert diode spec) individually soldered to it as well as a row and a column wire. Each side row and column wire then connects to a "Arduino" Pro Micro board with taylored QMK Software running on each side of the keyboard. The microcontrollers from each side are further connected together and the left one has a USB connection to whatever computer the keyboard is plugged into.',
      imageUrl: 'https://media.printables.com/media/prints/133146/images/1274377_147dad12-0439-48cb-b3ff-570ea5af5e31/thumbs/inside/1920x1440/jpg/large_display_pxl_20201104_212007417_133146.webp',
      startDate: new Date(2022, 12, 13),
      endDate: undefined
    },
    {
      name: '1',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
      imageUrl: 'https://media.printables.com/media/prints/133146/images/1274377_147dad12-0439-48cb-b3ff-570ea5af5e31/thumbs/inside/1920x1440/jpg/large_display_pxl_20201104_212007417_133146.webp',
      startDate: new Date(),
      endDate: undefined
    },
    {
      name: 'Portfolio Website',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'The website you are currently viewing',
      startDate: new Date()
    },
    {
      name: '2',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '3',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '4',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '5',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '6',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '7',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '8',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '9',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '10',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '11',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '12',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '13',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '14',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '15',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },
    {
      name: '16',
      status: Status.active,
      id: uuidv4(), 
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nisi et lorem molestie, in semper nisl sodales.',
      long_description: 'Quisque eleifend euismod tristique. Pellentesque efficitur congue orci, sed semper nisl imperdiet iaculis. Etiam vitae augue rutrum, auctor felis eget, dignissim diam. Sed pellentesque diam id ligula pulvinar dignissim. Etiam et diam arcu. Nam pellentesque diam eget cursus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit aliquet porta. Aenean tellus sem, dapibus eu ex at, tempus congue arcu. Suspendisse eleifend ultrices tristique. Integer sed dui tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed leo fermentum, auctor augue at, tempus libero.',
    },

  ];

  constructor() { }
}
