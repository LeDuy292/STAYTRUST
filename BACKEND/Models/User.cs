using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

[Index("Phone", Name = "UQ__Users__5C7E359ED78FB619", IsUnique = true)]
[Index("Email", Name = "UQ__Users__A9D10534CD3A7073", IsUnique = true)]
[Index("UserName", Name = "UQ__Users__C9F284566652902D", IsUnique = true)]
public partial class User
{
    [Key]
    public int UserId { get; set; }

    [StringLength(100)]
    public string FullName { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string UserName { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    [StringLength(15)]
    [Unicode(false)]
    public string Phone { get; set; } = null!;

    [StringLength(255)]
    [Unicode(false)]
    public string Password { get; set; } = null!;

    [StringLength(20)]
    [Unicode(false)]
    public string? Role { get; set; }

    public bool? Status { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [InverseProperty("Tenant")]
    public virtual ICollection<RentalContract> RentalContracts { get; set; } = new List<RentalContract>();

    [InverseProperty("CreatedByNavigation")]
    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();

    [InverseProperty("Landlord")]
    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();

    [InverseProperty("User")]
    public virtual UserProfile? UserProfile { get; set; }
}
