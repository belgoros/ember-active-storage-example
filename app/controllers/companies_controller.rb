class CompaniesController < ApplicationController

  def index
    render json: Company.all
  end

  def create
    create_params = ActiveModelSerializers::Deserialization.jsonapi_parse(
      params, only: [:name, :logo]
    )
    render json: Company.create(create_params)
  end

end
