json.array!(@reads) do |read|
  json.extract! read, :id, :name, :book, :synopsis
  json.url read_url(read, format: :json)
end
