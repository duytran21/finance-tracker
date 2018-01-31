json.extract! article, :id, :title, :content, :description, :isVisible, :tags, :img_url, :created_at, :updated_at
json.url article_url(article, format: :json)
