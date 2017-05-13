class BeansController < ApplicationController
  before_action :set_bean, only: [:show, :edit, :update, :destroy]

  def index
    @beans = Bean.all
  end

  def show
  end

  def new
    @bean = Bean.new
  end

  def create
    @bean = Bean.new(bean_params)

    if @bean.save
      redirect_to beans_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @bean.update_attributes(bean_params)
      redirect_to bean_path(@bean)
    else
      render :edit
    end
  end

  def destroy
    @bean.destroy
    redirect_to beans_path
  end

private
  def bean_params
    params.require(:bean).permit(:name, :roast, :origin, :quantity)
  end

  def set_bean
    @bean = Bean.find(params[:id])
  end
end
