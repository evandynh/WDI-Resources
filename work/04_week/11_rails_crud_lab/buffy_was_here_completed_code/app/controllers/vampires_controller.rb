class VampiresController < ApplicationController
  before_action :set_vampire, only: [:show, :edit, :update, :destroy]

  # GET /vampires
  # GET /vampires.json
  def index
    @vampires = Vampire.all
  end

  # GET /vampires/1
  # GET /vampires/1.json
  def show
  end

  # GET /vampires/new
  def new
    @vampire = Vampire.new
  end

  # GET /vampires/1/edit
  def edit
  end

  # POST /vampires
  # POST /vampires.json
  def create
    @vampire = Vampire.new(vampire_params)

    respond_to do |format|
      if @vampire.save
        format.html { redirect_to @vampire, notice: 'Vampire was successfully created.' }
        format.json { render :show, status: :created, location: @vampire }
      else
        format.html { render :new }
        format.json { render json: @vampire.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vampires/1
  # PATCH/PUT /vampires/1.json
  def update
    respond_to do |format|
      if @vampire.update(vampire_params)
        format.html { redirect_to @vampire, notice: 'Vampire was successfully updated.' }
        format.json { render :show, status: :ok, location: @vampire }
      else
        format.html { render :edit }
        format.json { render json: @vampire.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vampires/1
  # DELETE /vampires/1.json
  def destroy
    @vampire.destroy
    respond_to do |format|
      format.html { redirect_to vampires_url, notice: 'Vampire was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vampire
      @vampire = Vampire.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vampire_params
      params.require(:vampire).permit(:name, :age, :sire, :staked)
    end
end
