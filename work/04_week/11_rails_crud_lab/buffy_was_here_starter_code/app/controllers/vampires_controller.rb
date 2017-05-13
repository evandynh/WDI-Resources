class VampiresController < ApplicationController
  #this before_action will set the vampire for show, edit, update, and destroy - complete the set_vampire private method at the bottom of this controller
  before_action :set_vampire, only: [:show, :edit, :update, :destroy]

  def index
    # add an instance variable to respresent all vampires in your db
  end

  def show
  end

  def new
    # add an instance variable to represent one new vampire
  end

  def edit
  end

  def create
    # add an instance variable to represent one new vampire and add vampire_params as the argument

    # add a conditional that will redirect to the new vampire's show page if it saves successfully, but will render the new form if it doesn't
  end

  def update
    # add a conditional that will redirect to the vampire's show page if it updates successfully, but will render the edit form if it doesn't
  end

  def destroy
    # destroy the vampire
    # then redirect to the vampires index
  end

private
  def set_vampire
    # use the :id to find one vampire in the database
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def vampire_params
    # whitelist all of the vampire attributes so that your forms work!
  end
end
