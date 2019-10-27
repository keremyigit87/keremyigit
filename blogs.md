---
layout: blogs
title: Blog List
---

<div class="container">
    <div class="row">
        <div class="col-12">
            {% for post in site.posts %}
            <a href="{{post.url}}" class="work-card">
                <div class="work-img-wrapper">
                    <img src="{{post.image}}" alt="">
                </div>
                <div class="work-header-wrapper">
                    <h2>{{post.title}}</h2>
                    <p>{{post.subtitle}}</p>
                </div>
            </a>{% endfor %}
        </div>
    </div>
</div>
