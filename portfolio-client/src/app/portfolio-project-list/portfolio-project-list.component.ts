import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioProjectService } from '../portfolio-project.service';

@Component({
  selector: 'app-portfolio-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project-list.component.html',
  styleUrl: './portfolio-project-list.component.sass'
})



export class PortfolioProjectListComponent {
  constructor(readonly projectService: PortfolioProjectService,){}

  ngOnInit(): void {};


}
