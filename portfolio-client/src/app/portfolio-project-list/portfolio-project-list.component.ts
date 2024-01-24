import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioProjectService } from '../portfolio-project.service';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../interfaces/project';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-portfolio-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, MatChipsModule],
  templateUrl: './portfolio-project-list.component.html',
  styleUrl: './portfolio-project-list.component.sass'
})



export class PortfolioProjectListComponent {
  constructor(readonly projectService: PortfolioProjectService,){}

  public projects: Project[] = [];
  public availableFilters: string[] = ['Finished', 'On hold', 'Active', 'Inactive' ];
  public filters: string[] = [];
  private projectCache: Project[] = [];

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.projectCache = this.projects;
    this.availableFilters = this.availableFilters.concat(this.parseFilters(this.projectCache));
  };
  
  private parseFilters(projects:Project[]): string[] {
    let availableFilters: string[] = [];
    projects.forEach(project => {
      project.tags?.forEach(tag => {
        if(!(availableFilters.some(f => f === tag))) {
          availableFilters.push(tag)
          console.log(availableFilters);
        }
      });
    });
    return availableFilters;
  }

  public filterIsSelected(filter:string): boolean{
    if(this.filters.some(f => f === filter)){
      return true;
    }
    return false;
  }

  public toggleFilter(filter:string): void {
    if(this.filters.some(f => f === filter)){
      this.removeFilter(filter);
    } else {
      this.addFilter(filter);
    }
    this.filterProjects();
  }

  private addFilter(filter:string): void{
    console.log("Adding filter: " + filter)
    this.filters.push(filter)
    console.log(this.filters);
  };

  private removeFilter(filter:string) {
    console.log("Removing filter: " + filter)
    let index = this.filters.indexOf(filter);
    this.filters.splice(index, 1);
  }

  private filterProjects() {
    console.log("Filtering projects")
    console.log(this.filters);
    console.log(this.filters.length === 0)
    let projects: Project[] = [];
    if(this.filters.length === 0){
      this.projects = this.projectCache
      return;
    }
    for(let filter of this.filters){
      this.projectCache.forEach((project) => {
        if(!projects.includes(project)){
          if(project.tags?.some(f => f === filter) || project.status === filter){
            projects.push(project)
          };
        }
      });
    }
    this.projects = projects;
  }

  



}
