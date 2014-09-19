class Hero < ActiveRecord::Base
	mount_uploader :image, PhotoUploader
	mount_uploader :secondimage, PhotoUploader
end
