class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]

  def index
    render jsonapi: Company.all
  end

  def show
    render jsonapi: @company
  end

  def create
    @company = Company.create(company_params)
    if @company
      render jsonapi: @company
    else
      @company.logo.purge # TODO: Remove in Rails 6.0
    end
  end

  def update
    if @company.update(company_params)
      head :no_content
    else
      respond_with_errors @company
    end
  end

  def destroy
    @company.destroy
    head :no_content
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(params, only: [:name, :logo])
  end
end
