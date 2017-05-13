class TeasController < ApplicationController
  before_action :set_tea, only: [:show, :edit, :update, :destroy]

  def index
    @teas = Tea.all
  end

  def show
  end

  def new
    @tea = Tea.new
  end

  def create
    @tea = Tea.new(tea_params)

    if @tea.save
      redirect_to teas_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @tea.update_attributes(tea_params)
      redirect_to tea_path(@tea)
    else
      render :edit
    end
  end

  def destroy
    @tea.destroy
    redirect_to teas_path
  end

private
  def tea_params
    params.require(:tea).permit(:name, :origin, :caffeine, :looseleaf, :quantity)
  end
  def set_tea
    @tea = Tea.find(params[:id])
  end
end
