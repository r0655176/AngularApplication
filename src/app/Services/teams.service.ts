import { Injectable } from '@angular/core';
import { Team } from '../Models/Teams';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: AngularFirestoreCollection<Team>;
  private teamDoc: AngularFirestoreDocument<Team>;

  constructor(private db: AngularFirestore) { 
    this.teams = db.collection<Team>(config.collection_endpoint);
  }

  getTeams() : AngularFirestoreCollection<Team> {
    return this.teams;
  }

  addTeam(team: Team) {
    this.teams.add(team);
  }

  updateTeam(id, team: Team) {
    //Team document ophalen
    this.teamDoc = this.db.doc<Team>(config.collection_endpoint + "/" + id);
    this.teamDoc.update(team);
  }

  deleteTeam(id) {
    //Team document ophalen
    this.teamDoc = this.db.doc<Team>(config.collection_endpoint + "/" + id);
    this.teamDoc.delete();
  }
}
