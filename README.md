# Really Simple Pokedex

## Description 

Simple pokedex-like app, as of right now it is pending styling and other major features meant to be implemented later versions.

## Pages

You may acess three pages, a page to display a single pokemon data, a page to display preview data(id and name) of all pokemons and with lazy loading (loading 200 pokemons at a time), and a page to display filtered search for pokemons based on URL's variables.

## Single Pokemon Page

URI template: '/pokemon/:id'

Display data of a single pokemon.

## All Pokemons Page (Main Page)

URI template: '/'

Display preview-data(id and name) of all pokemons, preview-data is wrapped in a 'Link' component linking to the single pokemon page for that specific pokemon.
To load more pokemons, simply press the button on the bottom of the page.

##  Filtered Search Page

URI template: '/filtered?gen=1&type1=normal&type2=fighting'

Display preview-data(id and name) of any pokemons who fit in ALL of the specified search parameters defined in the URL's variables(gen and type).