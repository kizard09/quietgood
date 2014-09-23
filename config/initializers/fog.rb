CarrierWave.configure do |config| 
  config.fog_credentials = { 
    :provider               => 'AWS', 
    :aws_access_key_id      => 'AKIAJCHAJMQKLJNQDB6A', 
    :aws_secret_access_key  => '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', 
  } 
  config.fog_directory  = 'quietgood-assets' 
  config.fog_public     = false 
end 