class Hero < ActiveRecord::Base
	mount_uploader :image, PhotoUploader
	belongs_to :blog 
	has_many :reads
end
