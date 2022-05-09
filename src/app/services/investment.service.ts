import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInvestment } from '../state/investment/IInvestment';
import { CONSTANTS}  from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http:HttpClient) { }

  getInvestments = ():Observable<IInvestment[]> => {
    return this.http.get<IInvestment[]>(`${CONSTANTS.host}${CONSTANTS.investmentUri}`)
  }

  transformCategoryChartData = (categoriesData:any) => {
    const labels = [];
    const datasets = [];

    for (const category in categoriesData) {
      labels.push(category);
      datasets.push(parseInt(categoriesData[category]))
    }
    return { labels : labels, datasets:[{data:datasets,label:'Investment Amount'}]};
  }

  transformPlatformChartData = (platformData:any) => {
    const labels = [];
    const datasets = [];

    for (const platform in platformData) {
      labels.push(platform);
      datasets.push(parseInt(platformData[platform]))
    }
    return { labels : labels, datasets:[{data:datasets,label:'Investment Amount'}]};
  }
    
}
