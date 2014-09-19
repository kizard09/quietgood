class Blog < ActiveRecord::Base
	# validates :name, presence: true
	mount_uploader :image, PhotoUploader
end