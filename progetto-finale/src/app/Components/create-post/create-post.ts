import { Component, signal } from '@angular/core';
import { IPostData } from '../../model/postmodel';
import {
  form,
  Field,
  required,
  submit,
  maxLength,
  validate,
} from '@angular/forms/signals';

@Component({
  selector: 'app-create-post',
  imports: [Field],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  postModel = signal<IPostData>({
    title: '',
    caption: '',
  });

  postForm = form(this.postModel, (fieldpath) => {
    required(fieldpath.title, { message: 'Inserisci un titolo' });
    required(fieldpath.caption, { message: 'Inserisci una caption' });
    maxLength(fieldpath.title, 10, { message: 'il titolo è troppo lungo' });
    //----NON COMPARE L'ERRORE------
  });

  onSubmit(event: Event) {
    event.preventDefault(); //serve per non far ricaricare la pagina quando faccio il submit del form
    submit(this.postForm, async () => {
      console.log(`il valore della form è ${this.postForm()}`);
      //inserisco logica di submit
    });
  }
}
