import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Feed } from './Components/feed/feed';
import { MyPosts } from './Components/my-posts/my-posts';
import { CreatePost } from './Components/create-post/create-post';
import { PostDetail } from './Pages/post-detail/post-detail';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'feed', component: Feed, title: 'feed' },
      {
        path: 'myposts',
        loadComponent: () =>
          import('./Components/my-posts/my-posts').then((c) => c.MyPosts),
      },
      { path: 'createpost', component: CreatePost, title: 'create' },
      { path: '**', redirectTo: 'feed', title: 'feed' },
    ],
  },
  { path: 'post/:id', component: PostDetail, pathMatch: 'full' },
];
