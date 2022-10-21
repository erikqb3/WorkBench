import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router'; //allows you to target active URL/route
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router //allows you to navigate to other componentse
              ) { }

  ngOnInit() {
    this.route.data //use service resolver by binding data observable
      .subscribe(
        (data: Data) => {
          this.server = data['myServer'];
        }
      );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id); // the + turns the id pulled from the URL from a string to a number
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']); //updates server whenever change is triggered on this page
    //     }
    //   );     
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, //navigates from current router to relative route
                                    queryParamsHandling: 'preserve' //params handling take a string as a value and this could be "merge", to merge our old query params with any new we might add here; we can also "preserve".
                                  }) 
  }

}
