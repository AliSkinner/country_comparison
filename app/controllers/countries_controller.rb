class CountriesController < ApplicationController

  def index
    @uk = Country.find(118)
    @countries = Country.all
    respond_to do |format|
      format.html
      format.json { render json: @countries }
    end
  end


end
