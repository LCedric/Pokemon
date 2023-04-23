import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  ngOnInit() {
    this.pokemons = POKEMONS;
    const pokemonId: string | null =
      this.activatedRouter.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemons.find(
        pokemon => pokemon.id === parseInt(pokemonId)
      );
    }
  }
}
