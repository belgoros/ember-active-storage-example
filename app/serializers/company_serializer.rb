class CompanySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :logo

  def logo
    url_for(object.logo) if object.logo.attached?
  end
end
