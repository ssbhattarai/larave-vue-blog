<?php

use Illuminate\Database\Seeder;
use App\Post;


class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $post1 = new Post();
        $post1->title = "This is my FIrst post";
        $post1->body = "THis is the whhole body of the  post
                        THis is the whhole body of the  postTHis is the whhole body of the  postTHis is the whhole body of the  
                        postTHis is the whhole body of the  postTHis is the whhole body of the  post
        ";
        $post1->banner = 'image1.png';
        $post1->category = 'Html';
        $post1->save();
    }
}
