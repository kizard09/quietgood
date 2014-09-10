json.array!(@blogs) do |blog|
  json.extract! blog, :id, :name, :author, :date, :post
  json.url blog_url(blog, format: :json)
end
