class Read < ActiveRecord::Base
	mount_uploader :book, PhotoUploader
	belongs_to :heros
	has_many :blogs 
end
