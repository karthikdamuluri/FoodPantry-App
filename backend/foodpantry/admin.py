from django.contrib import admin
from foodpantry.models import *
# Register your models here.
admin.site.register(Volunteer, VolunteerAdmin)
admin.site.register(Inventory, InventoryAdmin)
admin.site.register(Donor, DonorAdmin)
admin.site.register(Donation, DonationAdmin)
