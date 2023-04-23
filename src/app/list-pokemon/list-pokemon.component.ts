import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [],
})
export class ListPokemonComponent {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router) {}

  seletPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemons.find(
      p => p.id?.toString() === pokemonId
    );

    this.pokemonSelected = pokemon;
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
