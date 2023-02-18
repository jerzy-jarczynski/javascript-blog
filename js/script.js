{
  'use strict';

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');

    /* [DONE] Get and set height for every article */
    const container = document.querySelector('.posts');
    const activeHeight = document.querySelector('.posts article.active').offsetHeight;
    container.style.height = activeHeight + 'px';
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post .post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = 'tag-size-';

  const generateTitleLinks = function(customSelector = '') {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      /* [DONE] find the title element */
      /* [DONE] get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* [DONE] insert link into html variable */
      html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();

  document.querySelector('.posts').style.height = document.querySelector('.posts article.active').offsetHeight + 'px';

  document.getElementById('myVideo').play();

  const calculateTagsParams = function(tags) {

    let params = {
      'min': 0,
      'max': 0,
    };

    console.log(tags);

    for (const [key, value] of Object.entries(tags)) {
      if (value > params.max) {
        params.max = value;
      }
      if (params.min == 0) {
        params.min = value;
      } else {
        if (value < params.min) {
          params.min = value;
        }
      }
    }

    return params;
  };

  const calculateTagClass = function(count, params) {

    const normalizedCount = count - params.min;

    const normalizedMax = params.max - params.min;

    const percentage = normalizedCount / normalizedMax;

    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

    return `${optCloudClassPrefix}${classNumber}`;
  };

  const generateTags = function(){
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};

    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE] find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* [DONE] START LOOP: for each tag */
      for (let tag of articleTagsArray) {

        /* [DONE] generate HTML of the link */
        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* [DONE] add generated code to html variable */
        html = html + tagHTML;

        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]) {

          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;

        } else {

          allTags[tag]++;

        }

        /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){

      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += `<li class="${calculateTagClass(allTags[tag], tagsParams)}"><a href="#tag-${tag}">${tag}</a></li>`;

    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
  };

  generateTags();

  const tagClickHandler = function(event) {
    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* [DONE] find all tag links with class active */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* [DONE] START LOOP: for each active tag link */
    for (let link of tagLinks) {

      /* [DONE] remove class active */
      link.classList.remove('active');

      /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const clickedTags = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */
    for (let clicked of clickedTags) {

      /* [DONE] add class active */
      clicked.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function() {
    /* [DONE] find all links to tags */
    const links = document.querySelectorAll('a[href^="#tag-"]');

    /* [DONE] START LOOP: for each link */
    for (let link of links) {

      /* [DONE] add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

      /* [DONE] END LOOP: for each link */
    }
  };

  addClickListenersToTags();

  const generateAuthors = function() {

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {

      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      let html = '';

      const articleAuthor = article.getAttribute('data-author');

      const authorHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';

      html = html + authorHTML;

      authorWrapper.innerHTML = html;
    }
  };

  generateAuthors();

  const authorClickHandler = function(event) {

    event.preventDefault();

    const clickedElement = this;

    const href = clickedElement.getAttribute('href');

    const author = href.replace('#author-', '');

    const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    for (let link of authorLinks) {

      link.classList.remove('active');

    }

    const clickedAuthors = document.querySelectorAll('a[href="' + href +'"]');

    for (let clicked of clickedAuthors) {

      clicked.classList.add('active');

    }

    generateTitleLinks('[data-author="' + author + '"]');

  };

  const addClickListenersToAuthors = function() {

    const authors = document.querySelectorAll('a[href^="#author-"]');

    for (let author of authors) {
      author.addEventListener('click', authorClickHandler);
    }

  };

  addClickListenersToAuthors();
}
