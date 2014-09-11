class Hero < ActiveRecord::Base
	mount_uploader :image, PhotoUploader
end
