export type Pokemon = {
  pokedex_number: number;
  name: string;
  image_url: string;
  description: string;
  type_1: 'planta' | 'veneno' | 'fuego' | 'agua' | 'bicho' | 'normal' | 'volador' | 'eléctrico' | 'tierra' | 'hielo' | 'lucha' | 'psíquico' | 'roca' | 'fantasma' | 'hada' | 'acero' | 'dragón';
  type_2: null | 'planta' | 'veneno' | 'fuego' | 'agua' | 'bicho' | 'normal' | 'volador' | 'eléctrico' | 'tierra' | 'hielo' | 'lucha' | 'psíquico' | 'roca' | 'fantasma' | 'hada' | 'acero' | 'dragón';
  ps: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  pre_evolution: null | number,
  evolution: null | number
}