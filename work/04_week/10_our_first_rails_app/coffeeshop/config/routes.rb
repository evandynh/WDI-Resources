Rails.application.routes.draw do

  # resources :instructors
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  get 'teas/' => 'teas#index'
  post 'teas/' => 'teas#create'
  get 'teas/new' => 'teas#new', as: :new_tea
  get 'teas/:id' => 'teas#show', as: :tea
  get 'teas/:id/edit' => 'teas#edit', as: :edit_tea
  patch 'teas/:id' => 'teas#update'
  delete 'teas/:id' => 'teas#destroy'

  get 'beans/' => 'beans#index'
  post 'beans/' => 'beans#create'
  get 'beans/new' => 'beans#new', as: :new_bean
  get 'beans/:id' => 'beans#show', as: :bean
  get 'beans/:id/edit' => 'beans#edit', as: :edit_bean
  patch 'beans/:id' => 'beans#update'
  delete 'beans/:id' => 'beans#destroy'
end
