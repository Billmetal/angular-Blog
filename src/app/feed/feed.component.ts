import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPosts!: Post[];
  postsNome!: Post[];
  post: Post = new Post;
  pesquisa!: string;
  alertaPesquisa!: boolean;
  alerta!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.alertaPesquisa = false;
    this.findPosts();
  }

  findPosts(){
    this.postService.getPosts().subscribe((data: Post[]) => {this.listPosts = data;} );
  }

  publicarMensagem(){
    this.alertaPesquisa = false;
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign("/feed");
    });
  }

  pesquisarNome(){
    this.alertaPesquisa = false;
    if(this.listPosts.length > 0 && this.pesquisa !== ""){
      this.postsNome = [];
      this.listPosts.forEach(value => {
        if(value.nome.includes(this.pesquisa)){
          this.postsNome.push(value);
        }
      });
      if(this.postsNome.length > 0){
        this.listPosts = this.postsNome;
      } else {
        
        this.alerta = "Nenhum comentário encontrado com esse nome ."
        this.alertaPesquisa = true;
      }
    } else {
      if(this.pesquisa === ""){
        location.assign("/feed");
      } else {
        this.alerta = "Não há comentários para buscar ."
        this.alertaPesquisa = true;
      }
    }
  }

  // Nenhum comentário encontrado com esse nome .

}
