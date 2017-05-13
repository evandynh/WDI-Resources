Rails.application.routes.draw do
  root 'welcome#index'

  get 'tweets/' => 'tweets#index'
  post 'tweets/' => 'tweets#create'
  get 'tweets/new' => 'tweets#new', as: :new_tweet
  get 'tweets/:id' => 'tweets#show', as: :tweet
  get 'tweets/:id/edit' => 'tweets#edit', as: :edit_tweet
  patch 'tweets/:id' => 'tweets#update'
  delete 'tweets/:id' => 'tweets#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
