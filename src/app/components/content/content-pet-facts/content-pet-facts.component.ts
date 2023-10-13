import { Component } from '@angular/core';

@Component({
  selector: 'app-content-pet-facts',
  templateUrl: './content-pet-facts.component.html',
  styleUrls: ['./content-pet-facts.component.css']
})
export class ContentPetFactsComponent {

  catData = {
    reverseOrder: false,
    title: 'The cat',
    imgSrc: 'meow.png',
    passages: [
      'Cats have been domesticated for around 4,000 years. While they were once valued for their hunting abilities, they are now valued for their companionship and loving behaviour.',
      'While not well known, the collective nouns used for cats and kittens are a clowder of cats and a kindle of kittens.',
      'Our domestic cats are known as little cats. They differ from large cats such as lions and tigers because they are naturally active at night and can purr.',
      'Cats are now the most popular pet in the UK and in the US.'
    ]
  }

  dogData = {
      reverseOrder: true,
      title: 'The dog',
      imgSrc: 'woof.png',
      passages: [
        'Domestic dogs have been companions to people for more than 15,000 years. There are more than 400 different breeds of dogs. PAWS or your local animal shelter has a wide variety of breeds available for adoption. The most popular types are the non-pedigree. They are extra special because they are one-of-a-kind!',
        'In general, small dogs live longer than large dogs. Small dogs such as terriers may live 20 years. Giant dogs like Great Danes may live eight years. The average lifespan for a mixed breed dog is 13 to 14 years. By making sure dogs have good food, regular veterinary care, shelter and a loving family, they will live longer, healthier lives.'
      ]
    }
}
