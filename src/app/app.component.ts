import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  seletPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemons.find(
      p => p.id?.toString() === pokemonId
    );

    this.pokemonSelected = pokemon;
  }

  ngOnInit() {
    console.table(this.pokemons);
  }
}
