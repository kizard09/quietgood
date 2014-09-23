CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => ENV['AKIAJCHAJMQKLJNQDB6A'],
      :aws_secret_access_key  => ENV['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']
      # :region                 => ENV['S3_REGION'] # Change this for different AWS region. Default is 'us-east-1'
  }
  config.fog_directory  = ENV['quietgood-assets']
end