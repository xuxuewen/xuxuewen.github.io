---
layout: home
title: 首页
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
    <p><a href="{{ post.url }}">阅读更多</a></p>
  </div>
  {% endfor %}
</div>