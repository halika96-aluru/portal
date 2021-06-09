import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var powerbi: any;
import * as pbi from 'powerbi-client';


@Component({
  selector: 'app-embedded-report',
  templateUrl: './embedded-report.component.html',
  styleUrls: ['./embedded-report.component.css']
})
export class EmbeddedReportComponent implements OnInit {

  @ViewChild('embeddedReport') embeddedReport!: ElementRef;
  @Input() reportId: number = 3;
 
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    //this.config = config;    
    this.getEmbedToken();
   
      // this.httpClient.get<any>(`${Constants.apiRoot}PowerBI/EmbedConfig`).subscribe(config => {
      //     this.config = config;
      //     const model = window['powerbi-client'].models;
      //     const embedConfig = {
      //         type: 'report',
      //         tokenType: model.TokenType.Embed,
      //         accessToken: config.token,
      //         embedUrl: config.embedURL,
      //         permissions: model.Permissions.All,
      //         settings: {
      //             filterPaneEnabled: true,
      //             navContentPaneEnabled: true
      //         }
      //     };
      //     powerbi.embed(this.embeddedReport.nativeElement, embedConfig);
      // });
  }

  getEmbedToken(){
    let report:any = {};

    // const model = (<any>window)["powerbi-client"].models;
    // const basicFilter = {
    //   $schema: "http://powerbi.com/product/schema#basic",
    //   target: {
    //     table: "Sales",
    //     column: "Sales"
    //   },
    //   operator: "lt",
    //   values: [258.95],
    //   filterType: model.FilterType.BasicFilter,         
    // }
    
    this.httpClient.get(`http://localhost:8080/powerbi/getEmbedToken/${this.reportId}`).subscribe((res: any) => {
        console.log(res);       
        const model:any = pbi.models;
        const basicFilter = {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "Sales",
            column: "Sales"
          },
          operator: "lt",
          values: [1376.85, 239.95, 98.95],
          filterType: model.FilterType.BasicFilter,         
        }
        const basicFilter2 = {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "Date",
            column: "Month"
          },
          operator: "lt",
          values: ['2016 Apr','2016 May','2016 Jun'],
          filterType: model.FilterType.BasicFilter,         
        }
        const embedConfig = {
          type: 'report',
          tokenType: model.TokenType.Embed,
          accessToken: res.accessToken,
          embedUrl: res.embedUrl[0].embedUrl,
          permissions: model.Permissions.All,
          
          // viewMode: models.ViewMode.Edit,
            

          settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true,
            panes: {
                filters: {
                    visible: true
                },
                pageNavigation: {
                    visible: true
                }
            },
            selection: {
                visible: true
            },
            syncSlicers: {
                visible: true
            },
            visualizations: {
                expanded: true
            },
            background: model.BackgroundType.Transparent
        }
      };
      setTimeout(() => {
       report =  powerbi.embed(this.embeddedReport.nativeElement, embedConfig);

      //  report.on('loaded', () => {
      //   report.getFilters()
      //       .then((filters:any) => {
      //           filters.push(basicFilter);
      //           filters.push(basicFilter2);
      //           return report.setFilters(filters);
      //       });
      // }, 1200);
    });
  }, 
    err => {
      console.log(err);
    }
    );

  }

}



