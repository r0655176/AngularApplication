import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { FilmModel } from 'src/app/Models/Film';
import { PostModel } from 'src/app/Models/PostModel';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
  filmNaam: string;
  response: any;
  filmModel:  FilmModel;

  zoekFilm() {
    //API aanroepen
    this._http.get("http://www.omdbapi.com/?t=" + this.filmNaam + "&apikey=48cc3813")
      .subscribe(
        (res) => {
          this.response = res;
        }
      );
  }

  counter: number;
  counterMap: number;

  obs$ = new Observable<number>(observer => {
    setInterval(() => {
      const rnd = Math.floor(Math.random() * 100);
      observer.next(rnd);
    }, 1000);

    setTimeout(() => {
      observer.complete();
      console.log('Observer stops on complete');
    }, 15001);
  });

  subscription = this.obs$.subscribe(data => {
    this.counter = data;
  });

  subscriptionMap = this.obs$
    .pipe(
      map((c: number) => c * 100)
    )
    .subscribe(data => {
      this.counterMap = data;
    });

   getallen$ = of(1, 2, 3, 4, 5)
   .pipe(
     filter(n => n % 2 !== 0)
   ).subscribe(x => console.log(x));

  errorHandling$ = of(1,2,3,4,5)
  .pipe(
  map(test => {
    if(test === 5) { throw new Error('5 geeft een fout!');}
    return test;
  })
  ).subscribe(
    result => console.log(result),
    err => console.log('Error: ' + err)
  );

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  zoekSlimmeFilm() {
    //API aanroepen
    this._http.get("http://www.omdbapi.com/?t=" + this.filmNaam + "&apikey=48cc3813")
      .pipe(
        map((f:any) => {
          return new FilmModel(f.Title, f.Director, f.Actors.split(", "))
        })
      )
      .subscribe(
        (res) => {
          this.filmModel = res;
        }
      );
  }

  postResponse;
  putResponse;
  patchResponse;
  deleteResponse;

  testPost() {
    let postModel: PostModel =
      new PostModel("Test post", "Inhoud van de post", 1);

    this._http.post(
      "https://jsonplaceholder.typicode.com/posts",
      postModel
    )
      .subscribe(response =>
        this.postResponse = response
      );
  }
  
  testPut() {
    let postModel: PostModel =
      new PostModel("Test put", "Inhoud van de put", 10, 1);

    this._http.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      postModel
    )
      .subscribe(response =>
        this.putResponse = response
      );
  }

  testPatch() {
    this._http.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: 'patch title'
      }
    )
      .subscribe(response =>
        this.patchResponse = response
      );
  }

  testDelete() {
    this._http.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    )
      .subscribe(response =>
        this.deleteResponse = response
      );
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
