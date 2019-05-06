class CompanySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :logo

  def logo
    if object.logo.attached?
      {
        url: rails_blob_url(object.logo),
        signed_id: object.logo.signed_id
      }
    end
  end
end
