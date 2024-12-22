import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Station } from '../types/stations.interface';
import { HttpClient } from '@angular/common/http';
import { Scheme } from '../types/schemes.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  router = inject(Router);
  private formBuilder = inject(FormBuilder);
  schemeSelectForm = this.formBuilder.group({
    schemeId: [-1, Validators.required],
  })
  schemes: Scheme[] = [
    {id: -1, city: 'All'},
    {id: 1, city: 'Waterford'},
    {id: 2, city: 'Cork'},
    {id: 3, city: 'Limerick'},
    {id: 4, city: 'Galway'}
  ];
  defaultSchemeId: number = -1;

  dataSource: MatTableDataSource<Station>;
  columns: string[] = ['schemeId', 'schemeShortName', 'stationId', 'name', 'nameIrish', 'docksCount', 'bikesAvailable',
    'bikesAvailableTypeOne', 'bikesAvailableTypeTwo', 'docksAvailable', 'status', 'latitude', 'longitude', 'dateStatus'];
  
  @ViewChild(MatSort, { static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true}) paginator!: MatPaginator;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.dataSource = new MatTableDataSource();
  };

  onClick() {
    this.usersService.isUserLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:3000/stationData/${this.defaultSchemeId}`).subscribe((res: any) => {
      this.dataSource.data = res as Station[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue  = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    this.http.get(`http://localhost:3000/stationData/${this.schemeSelectForm.value.schemeId}`).subscribe((res: any)=> {
      this.dataSource.data = res as Station[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}