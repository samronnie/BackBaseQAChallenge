Feature: Validate CRUD functionality related to Articles  

@createarticle @article
Scenario:  As a logged in user, I should be able to create an article

  When User clicks on sign in link
  Then User enters 'test1223@gmail.com' and 'test@123'
  When User signs in
  Then User should be logged in with 'testuserfollow'
  When User clicks on New Post link
  Then User fills all the article creation details with title 'title create'
  Then User clicks button Publish Article
  Then User validates the published article for user 'testuserfollow'
  Then User clicks on Home link
  When User clicks on Global feed 
  Then User should be able to see article created


@editarticle  @article
Scenario:  As a logged in user, I should be able to edit an article

  When User navigates to his profile 'testuserfollow'
  Then User clicks on the first avaiable article
  Then User clicks on 'edit' article in article overview
  Then User updates Article Description
  Then User clicks button Publish Article
  Then User should see the article updated


@deletearticle  @article
Scenario:  As a logged in user, I should be able to delete an article

  When User navigates to his profile 'testuserfollow'
  Then User clicks on the first avaiable article
  Then User clicks on 'delete' article in article overview
  Then User navigates to his profile 'testuserfollow'
  Then User should not be able to see article deleted