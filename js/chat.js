/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(".chat-button").on('click', function(e){
        e.preventDefault();
        $(".chat-content").slideToggle('fast');
  });