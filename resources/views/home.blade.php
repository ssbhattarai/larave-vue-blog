@extends('layouts.layouts')

@section('content')
<div>
        <div class="row">
            <div class="col-sm-2">
            <ul class="nav flex-column nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="category">Category</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
            <div class="col-sm-10">
                 <router-view></router-view>
            </div>
        </div>
</div>
@endsection
