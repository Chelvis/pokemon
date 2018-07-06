import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable()
export class JqueryFunctionsService {

  constructor() { }

  // Constrói e configura o acordeon nas informações do Pokémon
  setInfoAccordion(params?) {
    setTimeout(() => {
      $('.acContent').hide(); // Esconde todos os dados retráteis
      $('body').off('click');
      $('body').on('click', '.acTab', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('.acContent' + target).stop().slideToggle();
        $(this).toggleClass('ac-content-expanded');
      });
      params.callback();
    }, 10);
  }

}
